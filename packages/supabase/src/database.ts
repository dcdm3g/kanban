export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[]

export type Database = {
	graphql_public: {
		Tables: {
			[_ in never]: never
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			graphql: {
				Args: {
					operationName?: string
					query?: string
					variables?: Json
					extensions?: Json
				}
				Returns: Json
			}
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
	public: {
		Tables: {
			boards: {
				Row: {
					id: string
					title: string
					user_id: string | null
				}
				Insert: {
					id?: string
					title: string
					user_id?: string | null
				}
				Update: {
					id?: string
					title?: string
					user_id?: string | null
				}
				Relationships: [
					{
						foreignKeyName: 'boards_user_id_fkey'
						columns: ['user_id']
						isOneToOne: false
						referencedRelation: 'users'
						referencedColumns: ['id']
					},
				]
			}
			columns: {
				Row: {
					board_id: string | null
					id: string
					title: string
				}
				Insert: {
					board_id?: string | null
					id?: string
					title: string
				}
				Update: {
					board_id?: string | null
					id?: string
					title?: string
				}
				Relationships: [
					{
						foreignKeyName: 'columns_board_id_fkey'
						columns: ['board_id']
						isOneToOne: false
						referencedRelation: 'boards'
						referencedColumns: ['id']
					},
				]
			}
			subtasks: {
				Row: {
					done: boolean | null
					id: string
					task_id: string | null
					text: string
				}
				Insert: {
					done?: boolean | null
					id?: string
					task_id?: string | null
					text: string
				}
				Update: {
					done?: boolean | null
					id?: string
					task_id?: string | null
					text?: string
				}
				Relationships: [
					{
						foreignKeyName: 'subtasks_task_id_fkey'
						columns: ['task_id']
						isOneToOne: false
						referencedRelation: 'tasks'
						referencedColumns: ['id']
					},
				]
			}
			tasks: {
				Row: {
					column_id: string | null
					description: string | null
					id: string
					order: number
					title: string
				}
				Insert: {
					column_id?: string | null
					description?: string | null
					id?: string
					order: number
					title: string
				}
				Update: {
					column_id?: string | null
					description?: string | null
					id?: string
					order?: number
					title?: string
				}
				Relationships: [
					{
						foreignKeyName: 'tasks_column_id_fkey'
						columns: ['column_id']
						isOneToOne: false
						referencedRelation: 'columns'
						referencedColumns: ['id']
					},
				]
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
				PublicSchema['Views'])
		? (PublicSchema['Tables'] &
				PublicSchema['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R
			}
			? R
			: never
		: never

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema['Tables']
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I
			}
			? I
			: never
		: never

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema['Tables']
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U
			}
			? U
			: never
		: never

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema['Enums']
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
		? PublicSchema['Enums'][PublicEnumNameOrOptions]
		: never
