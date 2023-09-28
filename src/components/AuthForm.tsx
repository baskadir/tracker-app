import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { IUser } from 'types/user';

interface AuthFormProps {
    headerText: string;
    onSubmit: () => void;
    submitButtonText: string;
}

const defaultUser: IUser = {
    userName: '',
    password: ''
}

const AuthForm = ({ headerText, onSubmit, submitButtonText }: AuthFormProps) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultUser
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{headerText}</Text>

            <Text style={styles.label}>Username</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="userName"
            />
            {errors.userName && <Text style={styles.errorText}>Username is required.</Text>}

            <Text style={styles.label}>Password</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorText}>Password is required.</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>{submitButtonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    header: {
        marginVertical: 30,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#34A3A7',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
    errorText: {
        color: '#e74c3c',
        paddingVertical: 10
    }
})