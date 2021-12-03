defmodule DayTwoTest do
  use ExUnit.Case
  doctest DayTwo

  @input """
  forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2
  """

  test "one" do
    assert DayTwo.one(@input) == 150
  end

  test "two" do
    assert DayTwo.two(@input) == 900
  end
end
