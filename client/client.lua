RegisterCommand('nui_test', function(source, args)
  SendNUIMessage({
    action = 'info',
    data = args[1]
  })
end, false)

RegisterCommand('nui_toggle', function(source, args)
  SendNUIMessage({
    action = 'toggle'
  })
end, false)