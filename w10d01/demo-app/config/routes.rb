Rails.application.routes.draw do
  resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'profile', to: 'users#index'
  # get 'profile', controller: 'users', action: :index

  # resources :characters
  # resources :quotes

  resources :characters do
    resources :quotes
  end
end
