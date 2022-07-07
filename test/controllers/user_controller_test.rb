require "test_helper"

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get userList" do
    get user_userList_url
    assert_response :success
  end
end
