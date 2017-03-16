module ApplicationHelper
  def signed_in?
    user_signed_in? || admin_signed_in?
  end
end
