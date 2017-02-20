Rails.application.routes.draw do
  root 'home#index'

  devise_for :users
  devise_for :admins

  resources :home, only: [:index]
  resources :users, only: [:index, :show]
end
