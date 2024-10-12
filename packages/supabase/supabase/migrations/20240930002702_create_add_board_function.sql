create or replace function add_board(name text, column_names text[])
  returns json
  language plpgsql
as $$
declare
  added_board_id uuid;
  result json;
begin
  -- insert board
  insert into boards (user_id, name)
  values ((select auth.uid()), name)
  returning id into added_board_id;

  -- insert columns
  insert into columns (board_id, name)
  select added_board_id, unnest(column_names);

  -- build result with board and column ids
  result := json_build_object(
    'id', added_board_id,
    'columns', (
      select json_agg(
        json_build_object(
          'id', id,
          'name', name
        )
      ) from columns where board_id = added_board_id
    )
  );

  return result;
end;
$$;
