class HomeController < ApplicationController
  def index; end

  def show
    @home = Home.first
    render json: @home
  end

  def new
    @home = Home.new
  end

  def create
    @home = Home.new(home_params)
    if @home.save
      flash[:notice] = "Saved!"
      redirect_to root_path
    else
      flash[:notice] = @home.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @home = Home.first
  end

  def update
    @home = Home.first
    if @home.update_attributes(home_params)
      flash[:notice] = "Updated!"
      redirect_to root_path
    else
      flash[:notice] = @home.errors.full_messages.to_sentence
      render :edit
    end
  end

  private

  def home_params
    params.require(:home).permit(:about, :image)
  end
end
