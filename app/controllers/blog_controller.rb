class BlogController < ApplicationController
  protect_from_forgery with: :null_session
  def blogList
    data = Blog.all
    render json: data
  end

  def addBlog
    data = Blog.new({
      "blog_id" => params[:blog_id],
      "blog_title" => params[:blog_title],
      "blog_description" => params[:blog_description],
      "blog_image" => params[:blog_image]
    })

    data.save
    render json: params
  end

  def searchBlog
    data = Blog.where("blog_title LIKE?", "%" + params[:blog_title] + "%")
    render json: data
  end
   
  def editBlog
    data = Blog.find_by(blog_id: params[:blog_id])
    data.update(
      "blog_title" => params[:blog_title],
      "blog_description" => params[:blog_description],
      "blog_image" => params[:blog_image]
    )

    render json: data
  end

  def deleteBlog
    data = Blog.find_by(blog_id: params[:blog_id])
    data.destroy
    render json: {"deleted": "successfully"}
  end

end
