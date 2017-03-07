class Api::V1::PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    @posts = Post.all
    render json: @posts
  end

  def new
    @post = Post.new
  end

  def create
    @posts = Post.all
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      flash[:notice] = "Sorry, something went wrong"
      render json: @posts
    end
  end

  def edit
  end

  def update
  end

  def show
  end
end
