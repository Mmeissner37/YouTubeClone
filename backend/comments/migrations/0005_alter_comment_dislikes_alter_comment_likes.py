# Generated by Django 4.1.7 on 2023-03-24 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0004_alter_comment_dislikes_alter_comment_likes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='dislikes',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='likes',
            field=models.IntegerField(null=True),
        ),
    ]
