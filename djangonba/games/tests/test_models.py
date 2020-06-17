from django.test import TestCase
from django.contrib.auth import get_user_model

from games import models

def sample_user(email="fp@test.com", password='testpass'):
    """Create a sample user"""
    return get_user_model().objects.create_user(email, password)

class ModelTests(TestCase):

    def test_game_str(self):
        """Test the game string representation"""
        game = models.Game.objects.create(
            user=sample_user(),
            gamedate = '20200315',
            gameid = '7'
        )

        self.assertEqual(str(game), game.gamedate)