# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
           I can fix the issue by creating another table just for Students and assign a foreign key to the name of each student. ‘Cohort’ has many students and ‘Students’ belongs to a cohort table.Foreign key always should live on the ‘belongs to’ side.The foreign key name should be cohert_id.

  Researched answer:
            If you forgot a foreign key when creating a table,you can avoid the mistake by create another table just for Students and assign a foreign key to the name of each student. ‘Cohort’ has many students and ‘Students’ belongs to a cohort. Students has the foreign key. Foreign key always lives on the ‘belongs to’ side. Name the column heading for the foreign key table name of the main table(cohert_id).



2. Which RESTful routes must always be passed params? Why?

  Your answer:
          show,edit,update  and delete are the RESTful that require params.The reason is as follows: 
          Show - to pull a specific item of data from the database. 
          Edit - need to know which item we need to edit in the database.
          Update - I need to know which part of the data base to update,hence need to pass   in params id of the item to be updated.
          Delete - should  know what particular item to delete from the data base, so need to pass a params id of the item to be deleted

  Researched answer:
              params are required to perform a specific task in the data base of a particular item.Show,edit,update and destroy are the RESTfull routes  that require a params to pass in.
              Show - to pull a specific item of data from the database. 
              Edit - need to know which item we need to edit in the database.
              Update - I need to know which part of the data base to update,hence need 
                       to pass   in params id of the item to be updated.
              Destroy - know what particular item to delete from the data base, so  
                       need to pass a params id of the item to be deleted .




3. Name three rails generator commands. What is created by each?

  Your answer:
          1.rails g model :-will generate the model with the specified columns and their  data types. The model file, test file and migration would be created.
          2.rails db:migrate - is how we  setup and interact with the database, migration creates a database migration file
          3.rails g controller - adding a controller method. Creates the controller class with its functional test file, basically the view templates.

  Researched answer:
        There are differernt generate commands in rails such as :
        rails g scaffold:is handy when we need to create the models, views, and controllers for a new resource in a single operation, scaffolding is the tool.

        rails g migration:-Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL.

        rails g controller:-rails g controller - adding a controller method. Creates the controller class with its functional test file, basically the view templates.




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method=“GET”    /students
 students#index(controller method). The action will display a list of all students in the table.
method=“POST”   /students
students#create(controller method). The action will create a new student in the table.
method=“GET”    /students/new
students#new(controller method). The action will give an HTML form for creating a new student  in the table.
method=“GET”    /students/2
 students#show(controller method). The action will display unique student from the table.
method=“GET”    /students/2/edit
 students#edit(controller method). The action will  return an HTML form for editing a particular student.
method=“PATCH”  /students/2
 students#update. The action would update the specific student.
method=“DELETE” /students/2
students#destroy. The action woill delete the required student from the table.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

      As developer, I can develop a full-stack Rails application for managing a to-do list.
      As developer, my to-do list can have a title and description.
      As developer, I can add new to-do lists directly into my database.
      As a user, I can see all the to-do list titles and its values listed on the home page of the app in the form of an array
      As a user, I can click on the title of the to-do list and be routed to a page where I can see the full description of the to-do item.
      As a user, I can navigate from the to-do description page back and forth to the home page.
      As a user, I can see a form where I can create a new to-do lists.
      As a user, I can hit a button that will submit my to-do item to the database.
      As a user, when I submit my to-do item, I am redirected to the home page.
