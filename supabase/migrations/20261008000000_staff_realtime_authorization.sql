-- PASTEL Staff Queue Realtime authorization
-- Applied to production project rdcodzowehzmwdxhztxe on 2026-10-08.
-- Restricts the private Staff Queue topic to the authorized staff email.
drop policy if exists pastel_staff_realtime_receive on realtime.messages;

create policy pastel_staff_realtime_receive
on realtime.messages
for select
to authenticated
using (
  (select realtime.topic()) = 'pastel-staff-orders'
  and (current_setting('request.jwt.claims', true)::json ->> 'email') = 'sarl.pastel.pastry@gmail.com'
);
