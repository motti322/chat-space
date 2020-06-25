# README

##usersテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| name | string | null: false |
| e-mail | string | null: false |
| password | string | null: false |

### Association
- has_many : messages
- has_many : groups ,through : groups_users
- has_many : groups_users

##groupsテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| groupname | string | null: false |

### Association
- has_many : users, through :groups_users
- has_many : groups_users
- has_many : messages

##messagesテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| image | string | |
| message | text | |
| user_id| integer | null: false, foregin_key: true |
| group_id | integer | null: false, foregin_key: true |


### Association
- belongs_to :user
- belongs_to  :group

##groups_usersテーブル
| cloumn | type | options |
| ------ | ---- | ------- |
| group_id | integer | null: false, foregin_key: true |
| user_id | integer | null: false, foregin_key: true |

### Association

- belongs_to :group
- belongs_to :user


