class PostsController < ApplicationController
  before_action :authenticate_admin!, except: [:index]

  def index; end

  def new
    @post = Post.new
    2.times { @post.photos.build }
  end

  def create
    @post = Post.new(post_params)
    @photos = []
    post_params[:photos_attributes].to_h.each_value do |photo|
      @photos << Photo.new(post: @post, caption: photo[:caption],
      image: photo[:image])
    end
    @post.photos = @photos
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
    @photos = @post.photos
  end

  def update
    set_post
    @photos = @post.photos
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
      photos_attributes: [:id, :caption, :image, :_destroy]
    ).reject{ |_, v| v.blank? }
  end
end
