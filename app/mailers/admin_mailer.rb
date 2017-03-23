class AdminMailer < ApplicationMailer
  def new_user_waiting_for_approval(user)
    @user = user.name
    @url = users_url
    mail(
      to: 'jacob@konikoff.com',
      subject: 'You have a new user awaiting approval'
    )
  end
end
