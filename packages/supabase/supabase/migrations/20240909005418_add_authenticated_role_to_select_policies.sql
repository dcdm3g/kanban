alter policy "Users can view their own boards."
on boards
to authenticated;

alter policy "Users can view their own columns."
on columns
to authenticated;

alter policy "Users can view their own tasks."
on tasks
to authenticated;

alter policy "Users can view their own subtasks."
on subtasks
to authenticated;
