class Api::V1::HomeController < ApplicationController
  def index
    @data = nil;
    if user_signed_in?
      @data = {user: current_user}
    elsif admin_signed_in?
      @data = {admin: current_admin}
    end
    render json: @data
  end
end
