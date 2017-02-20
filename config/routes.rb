Rails.application.routes.draw do
  root 'home#index'

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

  resources :home, only: [:index]
  resources :users, only: [:index, :show]
end
