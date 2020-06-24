# README

##usersテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| user_id | string | null: false, foregin_key: true |
| e-mail | string | null: false, foregin_key: true |
| password | string | null: false |

###Association

has_many_through :
##messagesテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| messages | text | |
| user_id| string | null: false, foregin_key: true |

##groups_usersテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| group_id | integer | null: false, foregin_key: true |
| user_id | integer | null: false, foregin_key: true |



