class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :jwt_authenticatable,
         :recoverable, :rememberable, :validatable, :omniauthable,
         { omniauth_providers: %i[facebook], jwt_revocation_strategy: JwtBlacklist }
end
