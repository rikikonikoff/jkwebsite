class PostsController < ApplicationController
  def index; end

  def show; end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    binding.pry
    if @post.save
      flash[:notice] = "Blog posted!"
      redirect_to posts_path
    else
      flash[:notice] = @post.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    set_post
  end

  def update
    set_post
    if @post.update_attributes(post_params)
      flash[:notice] = "Post updated successfully!"
      redirect_to posts_path
    else
      flash[:notice] = @post.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    set_post
    @post.destroy
    redirect_to posts_path
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(
      :title,
      :body,
      photos_attributes: [:id, :caption, :photo, :_destroy]
    )
  end
end
