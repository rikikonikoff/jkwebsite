class WheresJacobsController < ApplicationController
  def index
    authenticate_admin! || authenticate_user!
  end
end
