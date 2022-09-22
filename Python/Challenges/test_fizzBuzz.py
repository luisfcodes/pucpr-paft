from fizzBuzz import fizzBuzz

def test_should_return_an_error_when_receiving_string():
    assert fizzBuzz('2') == "Valor inválido!"

def test_should_return_fizz_for_multiples_of_three():
    assert fizzBuzz(12) == 'Fizz'