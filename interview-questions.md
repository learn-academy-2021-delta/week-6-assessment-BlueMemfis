# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:  I know about add keys or add foreign keys but I am not too sure.  But it would be used to add it to the student.  It would new HAVE to be a column. But for sure on the student model. I will get back to you with a better answer after my research.

  Researched answer:  add_foreign_key along with the column name will produce the relationship between the two tables. Syntax format will be add_foreign_key(:cohort, :student).
  Ensure the structure are correct in the Cohort and Student models with a has_many and belongs_to.
  class Cohort < ApplicationRecord
    has_many :students
  end
  class Student < ApplicationRecord
    belongs_to :cohort
  end
  The foreign key should always go on the belongs_to side, which is the Student model. The naming convention is the modelname_id and datatype as integer, which will be cohort_id: integer.



2. Which RESTful routes must always be passed params? Why?

  Your answer:  I am going to take a guess and say create, update, reading and destroy.  Mainly because these routes attempt to operate on spcific 

  Researched answer: I honestly cant find a legit answer as to why. I understand it but am I looking up the wrong question lol. When rails dispatch these request to create, update, read, or destroy actions on the controller a param is needed to locate it...


3. Name three rails generator commands. What is created by each?

  Your answer:  A model generator creates a model, migration adds and removes colomns, resource

  Researched answer: 
  
  Model // rails g model the model generator focuses solely on the model. It will not create any views, it will not have it’s own controller, nor will it create any routes. The model name is singular form.
  
  Migration // rails g miogration Migration Generators all any additional columns to a table, add multiple at a time as well. Also to remove a coloumn we can use rail g migration remove_last_colomun_from_model

Resource // rails g resource Rails creates alsomt everything needed to start a data resource(migration, model, corresponding satabase table and a controller. It also make empty views. I was told that they are used the most because it bives a nie balance betweeen generationg the files you need w/ with the best case scenario as oppoesed to the "bloated" code. Who wants extra unwanted code?? It also creates a migration file for us.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  index   show a list of all students       

method="POST"   /students  create   creates a new student     

method="GET"    /students/new  new   return an HTML form for creating a new student

method="GET"    /students/2  show  dispaly student with id 2

method="GET"    /students/2/edit  edit   return an HTML form for editing student with id 2

method="PATCH"  /students/2  update   updates student with id 2      

method="DELETE" /students/2  destory   deletes student with id 2  


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


As a developer I can create an to-do  model in the database. An to-do has the following information: title, category, priority, and status.
As a user, I can see a landing page that shows the to-do list application with rows and columns showing: title, category, priority, and status.
As a user I can access a database with to-dos on it
As a user I can add (create) to-dos to the database
As a user I can delete to-dos from the database
As a user I can see and alter (create) what is still to-do and what has been completed aka the status.
As a user I can I can set priorities to each item on the list
As a user I can add an alarm to each item on the list
As the user I can destroy an to-do in the database.
As the user I can add a specific person's name to assign to-do. ie. Vacuum in category living room with a priority of high and a status of complete is assigned to Bubba Chuck.
green_check_mark
mom_dancing
raised_hands





