Rails.application.routes.draw do
  devise_for :admins, :users
  root 'home#index'
end
