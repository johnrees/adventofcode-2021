defmodule Day01 do
  def one(numbers) do
    numbers
    |> Enum.reduce(%{prev: :infinity, count: 0}, fn curr, acc ->
      %{
        prev: curr,
        count: if(curr > acc.prev, do: acc.count + 1, else: acc.count)
      }
    end)
    |> Map.get(:count)
  end

  def two(numbers) do
    numbers
    |> Enum.chunk_every(3, 1)
    |> Enum.map(&Enum.sum/1)
    |> one()
  end
end

numbers =
  File.read!(Path.expand("input.txt",__DIR__))
  |> String.split("\n", trim: true)
  |> Enum.map(&String.to_integer/1)

IO.puts(Day01.one(numbers))
IO.puts(Day01.two(numbers))
