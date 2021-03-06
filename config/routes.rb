Rails.application.routes.draw do
  get 'live_programs/show'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    devise_for :users, defaults: { format: :json }
    resources :albums, only: :index
    resources :pictures, only: :destroy
    resources :programs, only: :index
    resource :live_program, only: :show
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
