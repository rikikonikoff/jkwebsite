class AdminMailer < ApplicationMailer
  def new_user_waiting_for_approval(user)
    @user = user
    @url = user_url(@user)
    mail(
      to: Admin.find_by(name: "Jacob Konikoff").email,
      subject: 'You have a new user awaiting approval'
    )
  end
end
