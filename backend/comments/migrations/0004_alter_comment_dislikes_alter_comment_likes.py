# Generated by Django 4.1.7 on 2023-03-24 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_alter_comment_dislikes_alter_comment_likes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='dislikes',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='comment',
            name='likes',
            field=models.IntegerField(),
        ),
    ]
