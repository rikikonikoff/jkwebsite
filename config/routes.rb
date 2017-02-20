Rails.application.routes.draw do
  devise_for :users, controllers: {
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    unlocks: 'users/unlocks'
  }

  devise_for :admins, controllers: {
    confirmations: 'admins/confirmations',
    passwords: 'admins/passwords',
    registrations: 'admins/registrations',
    sessions: 'admins/sessions',
    unlocks: 'admins/unlocks'
  }

  root 'home#index'

  resources :home, only: [:index]
  resources :users, only: [:index, :show]
end
