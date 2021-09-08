class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end


  def validate_email_uniqueness
    @user = User.find_by(email: params[:email])
    if @user
      render json: ['Please use a different email. This email is already in use.'], status: :bad_request
    else
      render json: ['ok'], status: :ok
    end
  end
  private

  def user_params
    params.require(:user).permit(:email, :password, :username, :fname, :lname)
  end
  
 
end