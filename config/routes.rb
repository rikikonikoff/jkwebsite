Rails.application.routes.draw do
  root 'home#index'
  get "/wheresjacob", to: "wheres_jacobs#index", as: "wheres_jacobs"

  devise_for :users, controllers: {
    registrations: 'registrations',
    sessions: 'sessions'
  }
  devise_for :admins, controllers: {
    registrations: 'admins',
    sessions: 'sessions'
  }, skip: :passwords

  resources :home, only: [:index]
  resources :users, only: [:index]
  resources :publications, only: [:index]
  resources :posts do
    resources :photos, only: [:index]
  end

  namespace :api do
    namespace :v1 do
      resources :publications, only: [:index]
      resources :users, only: [:index, :show, :update]
      resources :wheres_jacobs, only: [:index, :create]
      resources :home, only: [:index]
      resources :posts, only: [:index, :show]
    end
  end
end
