class ApplicationMailer < ActionMailer::Base
  default from: 'everybody@appacademy.io'
  layout 'mailer'

  def welcome_email(user)
    @user = user 
    mail(to: user.email, subject: "Welcome to App Academy!")
  end
end
