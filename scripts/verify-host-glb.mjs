#!/usr/bin/env node
import fs from "node:fs";

const path = process.argv[2] || "assets/pastel-host.glb";
const b = fs.readFileSync(path);
if (b.readUInt32LE(0) !== 0x46546c67) throw new Error("Not a GLB file");
const version = b.readUInt32LE(4);
const length = b.readUInt32LE(8);
if (version !== 2 || length !== b.length) throw new Error("Invalid GLB v2 length/version");

let off = 12, json = null;
while (off < b.length) {
  const chunkLength = b.readUInt32LE(off);
  const chunkType = b.readUInt32LE(off + 4);
  const data = b.subarray(off + 8, off + 8 + chunkLength);
  if (chunkType === 0x4e4f534a) json = JSON.parse(new TextDecoder().decode(data).replace(/\u0000+$/g, "").trim());
  off += 8 + chunkLength;
}
if (!json) throw new Error("Missing JSON chunk");

const nodes = json.nodes || [];
const skins = json.skins || [];
const meshes = json.meshes || [];
const animations = json.animations || [];
const morphNames = new Set();
for (const mesh of meshes) {
  for (const prim of mesh.primitives || []) {
    for (const n of prim.targets || []) {
      for (const k of Object.keys(n)) morphNames.add(k);
    }
  }
  for (const target of mesh.weights || []) void target;
}
const nodeNames = nodes.map(n => n.name || "").filter(Boolean);
const head = nodeNames.find(n => /head/i.test(n) && !/head(?:top|end|tip)$/i.test(n)) || null;
const visemeNames = ["viseme_aa","viseme_CH","viseme_DD","viseme_E","viseme_FF","viseme_I","viseme_kk","viseme_nn","viseme_O","viseme_PP","viseme_RR","viseme_sil","viseme_SS","viseme_TH","viseme_U"];
const visemes = visemeNames.filter(n => morphNames.has(n));
const jaw = ["jawOpen","mouthOpen"].filter(n => morphNames.has(n));
const blinks = [...morphNames].filter(n => /blink|eye.*close|eyes.*close/i.test(n));
const clipNames = animations.map(a => a.name || "");
const idle = clipNames.find(n => /idle|breath|stand|rest/i.test(n)) || clipNames[0] || null;
const talk = clipNames.find(n => /talk|talking|speak|gesture|wave/i.test(n)) || null;
const nod = clipNames.find(n => /nod/i.test(n)) || null;

const report = {
  file: path,
  bytes: b.length,
  gltfVersion: version,
  skins: skins.length,
  meshes: meshes.length,
  bones: skins.reduce((n,s) => n + (s.joints?.length || 0), 0),
  headBone: head,
  morphCount: morphNames.size,
  visemeMode: visemes.length ? "viseme" : jaw.length ? "jaw" : "none",
  visemes,
  jaw,
  blinkTargets: blinks,
  animations: clipNames,
  idle,
  talk,
  nod
};
console.log(JSON.stringify(report, null, 2));

const failures = [];
if (!skins.length) failures.push("missing skinned humanoid skeleton");
if (!head) failures.push("missing head bone");
if (!idle) failures.push("missing idle/animation clip");
if (report.visemeMode === "none" && !talk) failures.push("no visemes/jaw and no talk animation fallback");
if (failures.length) {
  console.error("\nHOST GLB VERIFICATION FAILED:");
  for (const f of failures) console.error("- " + f);
  process.exit(1);
}
console.log("\nHOST GLB VERIFICATION: PASS");
