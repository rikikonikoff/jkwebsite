Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'registrations'
  }
  devise_for :admins

  get "/wheresjacob", to: "wheres_jacobs#index", as: "wheres_jacobs"

  resources :home, only: [:index]
  resources :users, only: [:index, :show]
  resources :publications
  resources :wheres_jacobs, only: [:create]

  namespace :api do
    namespace :v1 do
      resources :publications, only: [:index]
      resources :users, only: [:index]
      resources :wheres_jacobs, only: [:index, :create]
      resources :home, only: [:index]
    end
  end
end
