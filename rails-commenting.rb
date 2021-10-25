# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#It shows the inheritance pattern of a child class from the parent class (child class-Blogpostscontroller and parent component-ApplicationController)
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # All information about BlogPost from database can save  the content from the database as an instance variable.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #This ,ethod helps us to get one item of a specific  data using id of item BlogPost in the database.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #This methods is used to add new information to our application and store in the database.
  def new
    @post = Post.new
  end

  def create
    # ---5)
    #This instance variable creates new items or content to our database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #edit allows to have a form that eventually help to update information.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #update like create does not have view,this shows us what to update using the specific params id
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #Redirect_to: takes as to the web page  where we were and it refreshes the page if the 
      #the data is valid other wise it keeps the same page
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #Anything below the key word private cannot be called by a route.
  private
  def blog_post_params
    # ---10)
    #This method allows us to restrict access to particular columns that is  tiltes and content from  ouside.
    params.require(:blog_post).permit(:title, :content)
  end
end
