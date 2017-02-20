Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, skip: [:passwords]
  devise_for :admins, skip: [:passwords]

  resources :home, only: [:index]
  resources :users, only: [:index, :show]
  resources :publications
  resources :wheres_jacobs
end
