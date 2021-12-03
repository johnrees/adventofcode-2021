defmodule DayTwo do
  def one(input) do
    res =
      get_lines(input)
      |> Enum.reduce(
        %{h: 0, v: 0},
        fn [direction, distance], acc ->
          case direction do
            "forward" -> %{acc | h: acc.h + distance}
            "down" -> %{acc | v: acc.v + distance}
            "up" -> %{acc | v: acc.v - distance}
          end
        end
      )

    res.h * res.v
  end

  def two(input) do
    res =
      get_lines(input)
      |> Enum.reduce(
        %{h: 0, v: 0, aim: 0},
        fn [direction, distance], acc ->
          case direction do
            "forward" -> %{acc | h: acc.h + distance, v: acc.v + acc.aim * distance}
            "down" -> %{acc | aim: acc.aim + distance}
            "up" -> %{acc | aim: acc.aim - distance}
          end
        end
      )

    res.h * res.v
  end

  defp get_lines(input),
    do:
      input
      |> String.split("\n", trim: true)
      |> Enum.map(fn line ->
        [direction, distance] = String.split(line, " ")
        distance = String.to_integer(distance)
        [direction, distance]
      end)
end

IO.inspect(DayTwo.two(File.read!("lib/02/input.txt")))
