from rest_framework import serializers
from content.models import Project, Employee, EmailContact, PhoneContact, \
    AddressContact, UserSubscription, \
    BigTextualContent, Tag, SummaryNumericData, OurValues


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'customer', 'image',)


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'position', 'image',
                  'facebook', 'whatsapp', 'instagram',)


class EmailContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailContact
        fields = ('id', 'email',)


class PhoneContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneContact
        fields = ('id', 'phone',)


class AddressContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddressContact
        fields = ('id', 'city', 'address', 'image',)


class UserSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscription
        fields = ('id', 'name', 'email')


class OurValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurValues
        fields = ('id', 'name', 'description', 'image',)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'title', 'description', 'image',)

        
class BigTextualContentSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    class Meta:
        model = BigTextualContent
        fields = ('id', 'pre_title', 'pre_title_image', 'title', 'description', 'tags', 'image',)
        
    def get_tags(self, obj):
        queryset = Tag.objects.filter(related_content=obj)
        tags_data = []
        request = self.context.get("request")
        for tag in queryset:
            data = TagSerializer(tag).data
            image_url = data['image']
            data['image'] = request.build_absolute_uri(image_url)
            tags_data.append(data)
        return tags_data


class SummaryNumericDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummaryNumericData
        fields = ('id', 'data_description', 'color', 'number',)
