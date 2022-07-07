Rails.application.routes.draw do
  get '/user', to: 'user#userList'
  post '/user/addUser', to: 'user#addUser'
  get '/blog', to: "blog#blogList"
  post '/blog/addBlog', to: "blog#addBlog"
  get '/blog/searchBlog', to: "blog#searchBlog"
  put '/blog/editBlog', to: "blog#editBlog"
  delete '/blog/deleteBlog', to: "blog#deleteBlog"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
