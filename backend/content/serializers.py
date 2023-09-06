from rest_framework import serializers
from content.models import Project, Employee, EmailContact, PhoneContact, \
    AddressContact, UserSubscription, \
    BigTextualContent, Thesis, SummaryNumericData, OurValues


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
        fields = ('id', 'name', 'phone', 'email',)


class OurValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurValues
        fields = ('id', 'name', 'description', 'image',)


class ThesisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thesis
        fields = ('id', 'title', 'description', 'image',)

        
class BigTextualContentSerializer(serializers.ModelSerializer):
    theses = serializers.SerializerMethodField()
    class Meta:
        model = BigTextualContent
        fields = ('id', 'pre_title', 'pre_title_image', 'title', 'description', 'theses', 'image',)
        
    def get_theses(self, obj):
        queryset = Thesis.objects.filter(related_content=obj)
        tags_data = []
        request = self.context.get("request")
        for tag in queryset:
            data = ThesisSerializer(tag).data
            image_url = data['image']
            data['image'] = request.build_absolute_uri(image_url)
            tags_data.append(data)
        return tags_data


class SummaryNumericDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummaryNumericData
        fields = ('id', 'data_description', 'color', 'number',)
