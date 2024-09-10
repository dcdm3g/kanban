create table boards (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null
);

alter table boards enable row level security;

create policy "Users can view their own boards."
on boards for select
using ((select auth.uid()) = user_id);

create policy "Users can create boards."
on boards for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own boards."
on boards for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own boards."
on boards for delete
to authenticated
using ((select auth.uid()) = user_id);
