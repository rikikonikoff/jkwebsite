class Api::V1::HomeController < ApplicationController
  def index
    @data = nil
    if user_signed_in? && admin_signed_in?
      @data = { signed_in: true, user: current_user, admin: current_admin}
    elsif user_signed_in?
      @data = { signed_in: true, user: current_user }
    elsif admin_signed_in?
      @data = { signed_in: true, admin: current_admin }
    end
    render json: @data
  end
end
