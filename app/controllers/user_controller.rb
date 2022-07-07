class UserController < ApplicationController
  protect_from_forgery with: :null_session
  def userList
    data = User.all
    render json: data
  end

  def addUser
    data = User.new({
      "user_id" => params[:user_id],
      "user_name" => params[:user_name],
      "user_email" => params[:user_email],
      "user_password" => params[:user_password]
    })
    data.save
    render json: params
  end




end

