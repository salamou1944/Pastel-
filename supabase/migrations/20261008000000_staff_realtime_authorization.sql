-- PASTEL Staff Queue Realtime authorization
-- Production authorization for the Staff Queue.
-- Postgres Changes delivery is additionally gated by public.pastel_orders RLS.
drop policy if exists pastel_staff_realtime_receive on realtime.messages;

create policy pastel_staff_realtime_receive
on realtime.messages
for select
to authenticated
using (
  (select realtime.topic()) = 'pastel-staff-orders'
  and (select auth.jwt()->>'email') = 'sarl.pastel.pastry@gmail.com'
);

drop policy if exists pastel_orders_staff_select on public.pastel_orders;
create policy pastel_orders_staff_select
on public.pastel_orders
for select
to authenticated
using ((select auth.jwt()->>'email') = 'sarl.pastel.pastry@gmail.com');

drop policy if exists pastel_orders_staff_update on public.pastel_orders;
create policy pastel_orders_staff_update
on public.pastel_orders
for update
to authenticated
using ((select auth.jwt()->>'email') = 'sarl.pastel.pastry@gmail.com')
with check ((select auth.jwt()->>'email') = 'sarl.pastel.pastry@gmail.com');

revoke select on public.pastel_orders from anon;
revoke update on public.pastel_orders from anon;
grant select on public.pastel_orders to authenticated;
grant update(status) on public.pastel_orders to authenticated;
