class Blacklist < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Blacklist
end
