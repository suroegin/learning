import asana

TOKEN = ''


def get_projects(token):
    client = asana.Client.access_token(token)
    result = client.projects.get_projects()
    return result


projects = get_projects(TOKEN)
print(projects)
