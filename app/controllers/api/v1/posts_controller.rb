class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.order("created_at DESC, title")
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end
end
