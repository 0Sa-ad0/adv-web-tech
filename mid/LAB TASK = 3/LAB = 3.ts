/*
Discuss among your group members and pick a user category and implement the Pipes based 
on the corresponding rule given below. All the user must have their own Entity file.

USER CATEGORY 1:
Schema Criteria:
- Id: A primary key of type int that is unsigned.
- fullName: A varchar column of maximum length 100 characters 
- age: unsigned integer.
- status: default value 'active' and values are only 'active' or 'inactive',.
Operation:
- Create a user
- Change the status of a user to either 'active' or 'inactive'.
- Retrieve a list of users based on their 'inactive' status.
- Get a list of users older 40.

USER CATEGORY 2:
Schema Criteria:
- Id: generateId(): use @BeforeInsert for custom logic before insertion.
- isActive: A boolean column default value to true.
- fullName: A Nullable varchar column.
- phone: type bigint that is unsigned.
Operation:
- Create a user
- Modify the phone number of an existing user.
- Retrieve users with null values in the full name column.
- Remove a user from the system based on their id.

USER CATEGORY 3:
Schema Criteria:
- Id: generateId(): @BeforeInsert hook for custom logic before insertion.
- username: A varchar column of maximum length 100 characters, unique.
- fullName: A varchar column of maximum length 150 characters.
- isActive: A boolean column defaulting to false.
Operation:
- Create a user
- Retrieve users whose full name contains a specific substring.
- Retrieve a user based on their unique username.
- Remove a user based on their unique username.

USER CATEGORY 4:
Schema Criteria:
- Id: Autogenerate primary key 
- uniqueId: A varchar column of maximum length 150 characters, generated as a UUID.
- joiningDate: default value of the current timestamp.
- country: A varchar column of length 30, defaulting to 'Unknown'.
Operation:
- Create a user
- Modify the country of an existing user.
- Retrieve users by their joining date
- Retrieve users with the default country value ('Unknown')
*/