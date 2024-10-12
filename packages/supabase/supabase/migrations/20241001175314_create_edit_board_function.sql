create or replace function edit_board(id uuid, name text, columns jsonb)
returns void
language plpgsql
as $$
declare
  column_id uuid;
  column_name text;
  added_column_ids uuid[];
begin
  -- update board name
  update boards
  set name = name
  where id = id;

  -- delete columns
  delete from columns
  where user_id = (select auth.uid()) and not id @> columns;

  -- create and update columns
  for column in select * from jsonb_array_elements(columns) loop
    column_id := (column ->> 'id')::uuid;
    column_name := (column ->> 'name')::uuid;

    -- delete column
    if column_id is null then
      insert into columns (board_id, name)
      values (id, column_name);
    end if;

    -- update column
    update columns
    set name = column_name
    where id = column_id;
  end loop;
end;
$$;
