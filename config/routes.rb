Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'registrations'
  }
  devise_for :admins

  resources :home, only: [:index]
  resources :users, only: [:index, :show]
  resources :publications
  resources :wheres_jacobs
end
